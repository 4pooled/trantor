public class DataContext : DbContext
{
    public DbSet<Book> Books { get; set; }
    public DbSet<Quote> Quotes { get; set; }

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {}
}
