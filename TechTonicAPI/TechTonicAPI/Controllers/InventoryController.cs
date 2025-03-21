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
    public class InventoryController : ControllerBase
    {
        [HttpPost]
        public ActionResult SaveInventoryData(InventoryRequestDto requestDto)
        {
            SqlConnection connection = new SqlConnection
            {
                ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
            };

            SqlCommand command = new SqlCommand
            {
                CommandText = "sp_SaveInventoryData",
                CommandType = CommandType.StoredProcedure,
                Connection = connection
            };
            command.Parameters.AddWithValue("@ProductId", requestDto.ProductId);
            command.Parameters.AddWithValue("@ProductName", requestDto.ProductName);
            command.Parameters.AddWithValue("@AvailableQty", requestDto.AvailableQty);
            command.Parameters.AddWithValue("@ReOrderPoint", requestDto.ReOrderPoint);
            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();
            return Ok();
        }

        [HttpGet]
        public ActionResult GetInventoryData()
        {
            SqlConnection connection = new SqlConnection
            {
                ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
            };

            SqlCommand command = new SqlCommand
            {
                CommandText = "sp_GetInventoryData",
                CommandType = CommandType.StoredProcedure,
                Connection = connection
            };

            connection.Open();

            List<InventoryDto> response = new List<InventoryDto>();

            using (SqlDataReader sqlDataReader = command.ExecuteReader())
            {
                while (sqlDataReader.Read())
                {
                    InventoryDto inventoryDto = new InventoryDto();
                    inventoryDto.ProductId = Convert.ToInt32(sqlDataReader["ProductId"]);
                    inventoryDto.ProductName = Convert.ToString(sqlDataReader["ProductName"]);
                    inventoryDto.AvailableQty = Convert.ToInt32(sqlDataReader["AvailableQty"]);
                    inventoryDto.ReOrderPoint = Convert.ToInt32(sqlDataReader["ReOrderPoint"]);

                    response.Add(inventoryDto);
                }
            }
            connection.Close();
            return Ok(response);
        
        }
		[HttpDelete]
		public ActionResult DeleteInventoryData(int productId)
		{
			SqlConnection connection = new SqlConnection
			{
				ConnectionString = "Server=localhost\\SQLEXPRESS;Database=techtonic;Trusted_Connection=True;"
			};

			SqlCommand command = new SqlCommand
			{
				CommandText = "sp_DeleteInventoryDetails",
				CommandType = CommandType.StoredProcedure,
				Connection = connection
			};
			command.Parameters.AddWithValue("@ProductId", productId);
			connection.Open();

			command.ExecuteNonQuery();
			connection.Close();
			return Ok();

		}
	}
}
