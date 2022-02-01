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
        public string NASAUrl = "https://api.nasa.gov/neo/rest/v1/feed?start_date=1991-04-15&end_date=1991-04-15&api_key=DEMO_KEY";

      

        [HttpGet]
        [Route("asteroids")]
        public async Task<Double> getMiles()
        {

            //DateYYYY = 2022;
            //DateMM = 01;
            //DateDD = 18;
            double miles = 0;


            //var url = https://api.nasa.gov/neo/rest/v1/feed?start_date={DateYYYY}-{DateMM}-{DateDD}&end_date={DateYYYY}-{DateMM}-{DateDD}&api_key=DEMO_KEY";
            var url = $"https://api.nasa.gov/neo/rest/v1/feed?start_date=1991-04-15&end_date=1991-04-15&api_key=DEMO_KEY";
            var result = new List<Asteroid>();
           

            using (HttpClient client = new HttpClient())
            {
                

                var response = await client.GetAsync(url);
                string responseJSON = await response.Content.ReadAsStringAsync();
                dynamic responseObject = JsonConvert.DeserializeObject(responseJSON);
                foreach (dynamic D in responseObject.near_earth_objects["1991-04-15"])
                {
                    if(D.estimated_diameter.miles.estimated_diameter_max > miles)
                    {
                        miles = D.estimated_diameter.miles.estimated_diameter_max;
                    }
                
                }

                
            }
            return miles;








            // GET: NASAController
            //     public ActionResult Index()
            //     {
            //         return View();
            //     }

            // GET: NASAController / Details / 5
            //     public ActionResult Details(int id)
            //     {
            //         return View();
            //     }

            // GET: NASAController / Create
            //     public ActionResult Create()
            //     {
            //         return View();
            //     }

            // POST: NASAController / Create
            //[HttpPost]
            //[ValidateAntiForgeryToken]
            //     public ActionResult Create(IFormCollection collection)
            //     {
            //         try
            //         {
            //             return RedirectToAction(nameof(Index));
            //         }
            //         catch
            //         {
            //             return View();
            //         }
            //     }

            // GET: NASAController / Edit / 5
            //     public ActionResult Edit(int id)
            //     {
            //         return View();
            //     }

            // POST: NASAController / Edit / 5
            //[HttpPost]
            //[ValidateAntiForgeryToken]
            //     public ActionResult Edit(int id, IFormCollection collection)
            //     {
            //         try
            //         {
            //             return RedirectToAction(nameof(Index));
            //         }
            //         catch
            //         {
            //             return View();
            //         }
            //     }

            // GET: NASAController / Delete / 5
            //     public ActionResult Delete(int id)
            //     {
            //         return View();
            //     }

            // POST: NASAController / Delete / 5
            //[HttpPost]
            //[ValidateAntiForgeryToken]
            //     public ActionResult Delete(int id, IFormCollection collection)
            //     {
            //         try
            //         {
            //             return RedirectToAction(nameof(Index));
            //         }
            //         catch
            //         {
            //             return View();
            //         }
            //     }
        }
    }
}
