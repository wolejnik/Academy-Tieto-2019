using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.IO;
using System.Text;
using System.Net;

namespace tieto_app.Controllers
{


    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }
        
        [HttpGet("[action]")]
        async public Task<ContentResult> WeatherForecastsForCity(string city)
        {
            HttpClient client = new HttpClient();
            var response =  await client.GetStringAsync($"https://samples.openweathermap.org/data/2.5/weather?q={city}&appid=69656caac35f6879061f3e99d3de0ade");

            //Stream receiveStream = response.GetResponseStream ();
            //StreamReader readStream = new StreamReader (receiveStream, Encoding.UTF8);
            //var weatherForecast = await response.Content.ReadAsAsync<string>();
            
            HttpContext.Response.Headers["Content-Type"] = "application/json";
            return Content( response, "application/json");
            //return response;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
/*
        public class Weather{
            public int ID { get; set;}
            public string Main {get; set;}
            public string Description {get; set; }
            public string Icon { get; set; }
        }

       
        public class WeatherData {
            public int lon { get; set;}
            public int lat {get; set;}
            public string description {get; set; }
            public Weather = new Ar
        }
  */       
    }
}
