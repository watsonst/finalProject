using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Asteroid_API.Models
{
    public class Quotes
    {
        [Key]
        public int Percentage { get; set; }
        public string Quote { get; set; }
        public string Recommendation { get; set; }
    }
}
