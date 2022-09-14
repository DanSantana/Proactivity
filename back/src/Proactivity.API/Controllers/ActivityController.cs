using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proactivity.API.Models;

namespace Proactivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        [HttpGet]
        public Activity get(){
            return new Activity{Id=1, Description="Pintar novamente"};
        }


        [HttpGet]
        [Route("api/Getall")]
        public string getAll(){
            return "Get All called";
        }   


        [HttpPut]
        public Activity Put(int id, Activity activity){
        activity.Id++;        
            return activity;
        }     


        [HttpPost]
        public Activity Post(Activity activity){
            return activity;
        }       
    }
}