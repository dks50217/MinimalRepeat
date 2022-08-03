using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.StaticFiles;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseFileServer(new FileServerOptions {
    RequestPath = "",
    FileProvider = new Microsoft.Extensions.FileProviders
                    .ManifestEmbeddedFileProvider(typeof(Program).Assembly, "ui") 
});

var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".vue"] = "application/javascript";

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider
});

//app.MapGet("/", () => "Hello World!");

app.Run();
