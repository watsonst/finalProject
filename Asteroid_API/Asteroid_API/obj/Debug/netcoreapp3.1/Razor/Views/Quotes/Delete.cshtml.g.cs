#pragma checksum "C:\Users\me\Desktop\CodeCamp\repos\finalProject\Asteroid_API\Asteroid_API\Views\Quotes\Delete.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "95f5fc673f3af96331fff5ecfd062c15b574fd4f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Quotes_Delete), @"mvc.1.0.view", @"/Views/Quotes/Delete.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"95f5fc673f3af96331fff5ecfd062c15b574fd4f", @"/Views/Quotes/Delete.cshtml")]
    #nullable restore
    public class Views_Quotes_Delete : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Asteroid_API.Models.Quotes>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\me\Desktop\CodeCamp\repos\finalProject\Asteroid_API\Asteroid_API\Views\Quotes\Delete.cshtml"
  
    ViewData["Title"] = "Delete";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Delete</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>Quotes</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 15 "C:\Users\me\Desktop\CodeCamp\repos\finalProject\Asteroid_API\Asteroid_API\Views\Quotes\Delete.cshtml"
       Write(Html.DisplayNameFor(model => model.Quote));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 18 "C:\Users\me\Desktop\CodeCamp\repos\finalProject\Asteroid_API\Asteroid_API\Views\Quotes\Delete.cshtml"
       Write(Html.DisplayFor(model => model.Quote));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
#nullable restore
#line 21 "C:\Users\me\Desktop\CodeCamp\repos\finalProject\Asteroid_API\Asteroid_API\Views\Quotes\Delete.cshtml"
       Write(Html.DisplayNameFor(model => model.Recommendation));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
#nullable restore
#line 24 "C:\Users\me\Desktop\CodeCamp\repos\finalProject\Asteroid_API\Asteroid_API\Views\Quotes\Delete.cshtml"
       Write(Html.DisplayFor(model => model.Recommendation));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
        </dd>
    </dl>
    
    <form asp-action=""Delete"">
        <input type=""hidden"" asp-for=""Percentage"" />
        <input type=""submit"" value=""Delete"" class=""btn btn-danger"" /> |
        <a asp-action=""Index"">Back to List</a>
    </form>
</div>
");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Asteroid_API.Models.Quotes> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
