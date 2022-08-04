using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.StaticFiles;
using Drk.AspNetCore.MinimalApiKit;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".vue"] = "application/javascript";

app.UseFileServer(new FileServerOptions {
    RequestPath = "",
    FileProvider = new Microsoft.Extensions.FileProviders
                    .ManifestEmbeddedFileProvider(typeof(Program).Assembly, "ui"),
    StaticFileOptions = {
        ContentTypeProvider = provider
    }
});

//app.MapGet("/", () => "Hello World!");

app.RunAsDesktopTool();
