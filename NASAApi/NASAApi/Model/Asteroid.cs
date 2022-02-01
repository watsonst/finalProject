using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NASAApi.Model
{
    public class Asteroid
    {
        public int DateYYYY { get; set; }
        public int DateMM { get; set; }
        public int DateDD { get; set; }
        //public int asteroidCount { get; set; }
        //public double asteroidMiles { get; set; }

        public IEnumerable<Asteroid> Results { get; set; }
    }
}
