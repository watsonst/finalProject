#pragma checksum "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c181d88d32deed6201fecadbaf81c38be5a3a7f6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_FanFavorites_Index), @"mvc.1.0.view", @"/Views/FanFavorites/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c181d88d32deed6201fecadbaf81c38be5a3a7f6", @"/Views/FanFavorites/Index.cshtml")]
    public class Views_FanFavorites_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Asteroid_API.Models.FanFavorites>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Index</h1>\r\n\r\n<p>\r\n    <a asp-action=\"Create\">Create New</a>\r\n</p>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ");
#nullable restore
#line 16 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Date));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 19 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Percentage));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 22 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Counter));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n");
#nullable restore
#line 28 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
 foreach (var item in Model) {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <tr>\r\n            <td>\r\n                ");
#nullable restore
#line 31 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Date));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 34 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Percentage));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 37 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Counter));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 977, "\"", 1000, 1);
#nullable restore
#line 40 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
WriteAttributeValue("", 992, item.ID, 992, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\r\n                <a asp-action=\"Details\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1053, "\"", 1076, 1);
#nullable restore
#line 41 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
WriteAttributeValue("", 1068, item.ID, 1068, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Details</a> |\r\n                <a asp-action=\"Delete\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1131, "\"", 1154, 1);
#nullable restore
#line 42 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
WriteAttributeValue("", 1146, item.ID, 1146, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a>\r\n            </td>\r\n        </tr>\r\n");
#nullable restore
#line 45 "C:\Users\seanf\source\repos\Asteroid_API\Asteroid_API\Views\FanFavorites\Index.cshtml"
}

#line default
#line hidden
#nullable disable
            WriteLiteral("    </tbody>\r\n</table>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Asteroid_API.Models.FanFavorites>> Html { get; private set; }
    }
}
#pragma warning restore 1591
