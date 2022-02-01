using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NASAApi.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace NASAApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NASAController : Controller
    {
        [HttpGet]
        [Route("miles")]
        public async Task<Double> getMiles(string finalDate)
        {
            double miles = 0;


            var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date={finalDate}&end_date={finalDate}&api_key=DEMO_KEY";
            //var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date=1991-04-15&end_date=1991-04-15&api_key=DEMO_KEY";
           

            using (HttpClient client = new HttpClient())
            {
                

                var response = await client.GetAsync(url);
                string responseJSON = await response.Content.ReadAsStringAsync();
                dynamic responseObject = JsonConvert.DeserializeObject(responseJSON);
                foreach (dynamic D in responseObject.near_earth_objects[$"{finalDate}"])
                {
                    if(D.estimated_diameter.miles.estimated_diameter_max > miles)
                    {
                        miles = D.estimated_diameter.miles.estimated_diameter_max;
                    }
                
                }

                
            }
            return miles;
        }

        [HttpGet]
        [Route("kilometers")]
        public async Task<Double> getKilometers(string finalDate)
        {
            double kilometers = 0;


            var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date={finalDate}&end_date={finalDate}&api_key=DEMO_KEY";
            //var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date=1991-04-15&end_date=1991-04-15&api_key=DEMO_KEY";


            using (HttpClient client = new HttpClient())
            {


                var response = await client.GetAsync(url);
                string responseJSON = await response.Content.ReadAsStringAsync();
                dynamic responseObject = JsonConvert.DeserializeObject(responseJSON);
                foreach (dynamic D in responseObject.near_earth_objects[$"{finalDate}"])
                {
                    if (D.estimated_diameter.kilometers.estimated_diameter_max > kilometers)
                    {
                        kilometers = D.estimated_diameter.kilometers.estimated_diameter_max;
                    }

                }


            }
            return kilometers;
        }

        [HttpGet]
        [Route("name")]
        public async Task<IActionResult> getName(string finalDate)
        {
            string name = "";
            double miles = 0;

            var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date={finalDate}&end_date={finalDate}&api_key=DEMO_KEY";
            //var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date=1991-04-15&end_date=1991-04-15&api_key=DEMO_KEY";


            using (HttpClient client = new HttpClient())
            {


                var response = await client.GetAsync(url);
                string responseJSON = await response.Content.ReadAsStringAsync();
                dynamic responseObject = JsonConvert.DeserializeObject(responseJSON);
                foreach (dynamic D in responseObject.near_earth_objects[$"{finalDate}"])
                {
                    if (D.estimated_diameter.miles.estimated_diameter_max > miles)
                    {
                        miles = D.estimated_diameter.miles.estimated_diameter_max;
                    }
                }

                foreach(dynamic D in responseObject.near_earth_objects[$"{finalDate}"])
                {
                    if (D.estimated_diameter.miles.estimated_diameter_max == miles)
                    {
                        name = D.name;
                    }
                }

                var rename = JsonConvert.SerializeObject(name);
                return new OkObjectResult(rename);
            }
        }

        [HttpGet]
        [Route("count")]
        public async Task<int> getCount(string finalDate)
        {
            using (HttpClient client = new HttpClient())
            {
                var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date={finalDate}&end_date={finalDate}&api_key=DEMO_KEY";

                var response = await client.GetAsync(url);
                string responseJSON = await response.Content.ReadAsStringAsync();
                dynamic responseObject = JsonConvert.DeserializeObject(responseJSON);

                return responseObject.element_count;
            }
        }
    }
}
