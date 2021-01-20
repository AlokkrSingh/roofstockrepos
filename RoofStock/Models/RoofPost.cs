using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RoofStock.Models
{
    public class RoofPost
    {
		[Key]
		public int Id { get; set; }

		[Required]
		public string Address { get; set; }

		[Required]
		public string YearBuilt { get; set; }

		[Required]
		public decimal ListPrice  { get; set; }

		[Required]
		public decimal MonthlyRent { get; set; }

		[Required]
		public string GrossYield { get; set; }
	}
}
