using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoofStock.Data;
using RoofStock.Models;
using Microsoft.AspNetCore.Cors;
namespace RoofStock.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class RoofPostsController : ControllerBase
    {
        private readonly RoofStockContext _context;
        private readonly IDataRepository<RoofPost> _repo;
        public RoofPostsController(RoofStockContext context, IDataRepository<RoofPost> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/RoofPosts
        [HttpGet]
        public IEnumerable<RoofPost> GetRoofPost()
        {
            return  _context.RoofPosts.OrderByDescending(p => p.Id); 
        }

        // GET: api/RoofPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetRoofPost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var roofPost = await _context.RoofPosts.FindAsync(id);

            if (roofPost == null)
            {
                return NotFound();
            }

            return Ok(roofPost);
        }

        // PUT: api/RoofPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoofPost([FromRoute] int id, [FromBody] RoofPost roofPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != roofPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(roofPost).State = EntityState.Modified;

            try
            {
                _repo.Update(roofPost);
                var save = await _repo.SaveAsync(roofPost);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoofPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RoofPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult> PostRoofPost([FromBody] RoofPost roofPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(roofPost);
            var save = await _repo.SaveAsync(roofPost);

            return CreatedAtAction("GetRoofPost", new { id = roofPost.Id }, roofPost);
        }

        // DELETE: api/RoofPosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteRoofPost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var roofPost = await _context.RoofPosts.FindAsync(id);
            if (roofPost == null)
            {
                return NotFound();
            }

            _repo.Delete(roofPost);
            var save = await _repo.SaveAsync(roofPost);

            return Ok(roofPost);
        }

        private bool RoofPostExists(int id)
        {
            return _context.RoofPosts.Any(e => e.Id == id);
        }
    }
}
