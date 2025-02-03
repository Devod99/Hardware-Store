using System;
using System.ComponentModel.DataAnnotations;

namespace HardwareStore.API.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public string Role { get; set; } = "User"; // "Admin" or "User"

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}