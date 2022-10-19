using AuthProxy.Configuration;
using AuthProxy.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Net.Mime;

namespace AuthProxy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ClientsInfo _options;
        private readonly HttpClient _client;

        public AuthController(
            IOptions<ClientsInfo> options,
            IHttpClientFactory httpClientFactory)
        {
            _options = options.Value;
            _client = httpClientFactory.CreateClient("auth");
            _client.DefaultRequestHeaders.Add("Accept", MediaTypeNames.Application.Json);
        }

        [HttpPost(Name = "access_token")]
        public async Task<IActionResult> AccessToken([FromForm] AuthRequest input, CancellationToken token)
        {
            var clientInfo = _options.Clients[ClientsEnum.Google];
            input.client_secret = clientInfo.SecretId;
            var postResult = await _client.PostAsJsonAsync(clientInfo.GetTokenUrl, input, token);
            var postContent = await postResult.Content.ReadAsStringAsync();
            return base.Ok(JsonConvert.DeserializeObject(postContent));
        }
    }
}