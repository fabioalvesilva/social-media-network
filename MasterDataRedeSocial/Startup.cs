using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Infrastructure.Relationships;
using DDDSample1.Infraestructure.Introductions;
using DDDSample1.Infraestructure.Users;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.repository;
using DDDSample1.Domain.Users.service;
using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Introductions;

using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Infraestructure.IntroductionRequests;

using DDDSample1.Infraestructure.RelationshipRequests;

using DDDSample1.Domain.Planeamentos;
using DDDSample1.Domain.Groups;
using DDDSample1.Infraestructure.Groups;

using Microsoft.OpenApi.Models;
using static System.Net.WebRequestMethods;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace DDDSample1
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options => {

                options.TokenValidationParameters = new TokenValidationParameters
                {

                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = "https://localhost:4002",
                    ValidAudience = "https://localhost:4002",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
                };
            });

            // UseNpgsql
            services.AddDbContext<DDDSample1DbContext>(opt =>
                opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
                .ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>());

            //Enable CORS

            services.AddCors(opt =>
            {
                opt.AddPolicy(name: "EnableCORS", builder =>
                {
                    builder.AllowCredentials()
                        .WithOrigins("https://localhost:4200", "http://localhost:4200", "https://lapr5g74spa.web.app", "10.9.21.241", "https://sapg74.azurewebsites.net")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });


            /*
            services.AddDbContext<DDDSample1DbContext>(opt =>
                opt.UseInMemoryDatabase("DDDSample1DB")
                .ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>());
            services.AddDbContext<DDDSample1DbContext>(opt =>
            opt.UseSqlServer("Data Source=host.docker.internal,1433;Initial Catalog=testdb;User ID=tester;Password=My@Super@Secret"));
            */


            // Register the Swagger generator, defining 1 or more Swagger documents
            //services.AddSwaggerGen();
            services.AddSwaggerGen(config =>
            {
                config.SwaggerDoc("v1", new OpenApiInfo() { Title = "Master Data Rede Social API", Version = "v1" });
            });

            ConfigureMyServices(services);

            services.AddControllers().AddNewtonsoftJson();

            services.AddMvc(options => options.EnableEndpointRouting = false);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors("EnableCORS");
            app.UseMvc();

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.)
            app.UseSwaggerUI(c =>
           {
               c.SwaggerEndpoint("/swagger/v1/swagger.json", "Master Data Rede Social API");
           }
            );
        }

        public void ConfigureMyServices(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<UserService>();
            services.AddTransient<ServiceHelper>();

            services.AddTransient<IRelationshipRepository, RelationshipRepository>();
            services.AddTransient<RelationshipService>();

            services.AddTransient<IIntroductionRequestRepository, IntroductionRequestRepository>();
            services.AddTransient<IntroductionRequestService>();

            services.AddTransient<IIntroductionRepository, IntroductionRepository>();
            services.AddTransient<IntroductionService>();

            services.AddTransient<IRelationshipRequestRepository, RelationshipRequestRepository>();
            services.AddTransient<RelationshipRequestService>();

            services.AddTransient<IGroupRepository, GroupRepository>();
            services.AddTransient<GroupService>();

            services.AddTransient<PlaneamentoService>();

            services.AddControllers();
            services.AddMvc(options => options.EnableEndpointRouting = false);
            

        }
    }
}
