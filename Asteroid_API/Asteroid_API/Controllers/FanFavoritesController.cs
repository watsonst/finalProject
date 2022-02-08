using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Asteroid_API.Data;
using Asteroid_API.Models;

namespace Asteroid_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FanFavoritesController : Controller
    {
        private readonly Asteroid_APIContext _context;

        public FanFavoritesController(Asteroid_APIContext context)
        {
            _context = context;
        }

        // GET: FanFavorites
        [HttpGet]
        [Route("FavList")]
        public async Task<IActionResult> GetFavorites()
        {
            var favs = await _context.FanFavorites.ToListAsync();
            favs = favs.OrderBy(f => f.Counter).ToList();
            favs.Reverse();

            var result = new OkObjectResult(favs);
            return result;
        }

        [HttpPost]
        [Route("NewFav")]
        public async Task<IActionResult> CreateFav([Bind("Date, Percentage, Counter, Quote, Recommendation")] FanFavorites favorite)
        {
            bool check = false;
            FanFavorites blank = new FanFavorites();
            var favs = await _context.FanFavorites.ToListAsync();
            foreach (FanFavorites fav in favs)
            {
                if(fav.Date == favorite.Date)
                {
                    blank = fav;
                    check = true;
                }
            }

            if(check == false)
            {
                favorite.Counter++;
                await _context.AddAsync(favorite);
                await _context.SaveChangesAsync();

                var result = new OkObjectResult(favorite);
                return result;
            }
            else
            {
                blank.Counter++;
                _context.Update(blank);
                _context.SaveChanges();

                var result = new OkObjectResult(favorite);
                return result;
            }
         
        }

        [HttpPut]
        [Route("UpdateFav")]
        public async Task<IActionResult> UpdateFav(FanFavorites favorite)
        {
            favorite.Counter++;
            _context.Update(favorite);
            _context.SaveChanges();

            var result = new OkObjectResult(favorite);
            return result;
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> DeleteFavorite(int ID)
        {
            var selectID = await _context.FanFavorites.FirstOrDefaultAsync(m => m.ID == ID);

            if(selectID == null)
            {
                return NotFound();
            }

            _context.FanFavorites.Remove(selectID);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(selectID);
            return result;
        }

    }
}
