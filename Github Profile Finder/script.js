async function getProfile() {
  const username = document.getElementById("username").value;
  const profileDiv = document.getElementById("profile");

  if (username === "") {
    profileDiv.innerHTML = "<p>Please enter a username</p>";
    return;
  }

  try {
    const response = await fetch("https://api.github.com/users/" + username);
    const data = await response.json();

    if (data.message === "Not Found") {
      profileDiv.innerHTML = "<p>User not found</p>";
      return;
    }

    profileDiv.innerHTML = `
      <div class="profile-card">
        <img src="${data.avatar_url}" alt="Profile Image">

        <h2>${data.name ? data.name : "No Name"}</h2>

        <p>${data.bio ? data.bio : "No bio available"}</p>

        <p>Followers: ${data.followers}</p>
        <p>Repos: ${data.public_repos}</p>

        <a href="${data.html_url}" target="_blank">
          View Profile
        </a>
      </div>
    `;

  } catch (error) {
    profileDiv.innerHTML = "<p>Something went wrong</p>";
  }
}



