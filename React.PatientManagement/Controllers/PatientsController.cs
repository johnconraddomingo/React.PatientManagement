using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace React.PatientManagement.Controllers
{
    [Route("api/[controller]")]
    public class PatientsController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Patient> Patients()
        {
            return new List<Patient>
            {
              new Patient{Id=1, Surname="Kent", FirstName= "Clark"},
              new Patient{Id=2, Surname="Jordan", FirstName= "Hal"},
              new Patient{Id=3, Surname="Wayne", FirstName= "Bruce"},
              new Patient{Id=4, Surname="Prince", FirstName= "Diana"}
          };
        }

        public class Patient
        {
            public int Id { get; set; }
            public string Surname { get; set; }
            public string FirstName { get; set; }
        }
    }
}
