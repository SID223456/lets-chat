function add_user()
{
    username = document.getElementById("username").value;
    localStorage.setItem("username_stored", username);
    window.location = "kwitter_room.html";
}