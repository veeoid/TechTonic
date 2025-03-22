using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechTonicAPI.Models;
using System.Text.Json.Serialization;

namespace TechTonicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        [HttpPost]
        public ActionResult SaveCustomerData(CustomerRequestDto requestDto)
		{
			SqlConnection connection = new SqlConnection
			{
				ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
			};
			SqlCommand command = new SqlCommand
			{
				CommandText = "sp_SaveCustomerDetails",
				CommandType = CommandType.StoredProcedure,
				Connection = connection
			};
			connection.Open();
			command.Parameters.AddWithValue("@CustomerId", requestDto.CustomerId);
			command.Parameters.AddWithValue("@FirstName", requestDto.FirstName);
			command.Parameters.AddWithValue("@LastName", requestDto.LastName);
			command.Parameters.AddWithValue("@Email", requestDto.Email);
			command.Parameters.AddWithValue("@Phone", requestDto.Phone);
			command.Parameters.AddWithValue("@RegistrationDate", requestDto.RegistrationDate);
			command.ExecuteNonQuery();
			connection.Close();
			return Ok();
		}
		[HttpGet]
		public ActionResult GetCutomerData()
		{
			SqlConnection connection = new SqlConnection
			{
				ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
			};

			SqlCommand command = new SqlCommand
			{
				CommandText = "sp_GetCustomerDetails",
				CommandType = CommandType.StoredProcedure,
				Connection = connection
			};

			connection.Open();

			List<CustomerDto> response = new List<CustomerDto>();

			using (SqlDataReader sqlDataReader = command.ExecuteReader())
			{
				while (sqlDataReader.Read())
				{
					CustomerDto customerDto = new CustomerDto();
					customerDto.CustomerId = Convert.ToInt32(sqlDataReader["CustomerId"]);
					customerDto.FirstName = Convert.ToString(sqlDataReader["FirstName"]);
					customerDto.LastName = Convert.ToString(sqlDataReader["LastName"]);
					customerDto.Email = Convert.ToString(sqlDataReader["Email"]);
					customerDto.Phone = Convert.ToString(sqlDataReader["Phone"]);
					customerDto.RegistrationDate = Convert.ToDateTime(sqlDataReader["RegistrationDate"]);

					response.Add(customerDto);
				}
			}
			connection.Close();
			return Ok(response);

		}

		[HttpDelete]
		public ActionResult DeleteCustomerData(int customerId)
		{
			SqlConnection connection = new SqlConnection
			{
				ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
			};

			SqlCommand command = new SqlCommand
			{
				CommandText = "sp_DeleteCustomerDetails",
				CommandType = CommandType.StoredProcedure,
				Connection = connection
			};

			connection.Open();
			command.Parameters.AddWithValue("@CustomerId", customerId);
			command.ExecuteNonQuery();
			connection.Close();
			return Ok();

		}

		[HttpPut]
		public ActionResult UpdateCustomerData(CustomerRequestDto customerRequest)
		{
			SqlConnection connection = new SqlConnection
			{
				ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
			};

			SqlCommand command = new SqlCommand
			{
				CommandText = "sp_UpdateCustomerDetails",
				CommandType = CommandType.StoredProcedure,
				Connection = connection
			};

			connection.Open();
			command.Parameters.AddWithValue("@CustomerId", customerRequest.CustomerId);
			command.Parameters.AddWithValue("@FirstName", customerRequest.FirstName);
			command.Parameters.AddWithValue("@LastName", customerRequest.LastName);
			command.Parameters.AddWithValue("@Email", customerRequest.Email);
			command.Parameters.AddWithValue("@Phone", customerRequest.Phone);
			command.Parameters.AddWithValue("@RegistrationDate", customerRequest.RegistrationDate);
			command.ExecuteNonQuery();
			connection.Close();
			return Ok();

		}
	}
}
