[Route("api/[controller]")]

[ApiController]
public class BookController : ControllerBase
{
    private readonly DataContext _context;

    public BookController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetBooks()
    {
        return Ok(await _context.Books.Include(b => b.Quotes).ToListAsync());
    }

    [HttpPost]
    public async Task<IActionResult> CreateBook(Book book)
    {
        _context.Books.Add(book);
        await _context.SaveChangesAsync();
        return Ok(book);
    }
}
