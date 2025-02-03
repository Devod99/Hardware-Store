using System;
using System.ComponentModel.DataAnnotations;

namespace HardwareStore.API.Models
{
    public class ChatMessage
    {
        public int Id { get; set; }

        public int? UserId { get; set; }
        public User User { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public bool IsFromBot { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}