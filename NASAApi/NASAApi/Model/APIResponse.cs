using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NASAApi.Model
{
    public class APIResponse
    {

        public string links { get; set; }
        public int element_count { get; set; }
        public string near_earth_objects { get; set; }

    }
}
