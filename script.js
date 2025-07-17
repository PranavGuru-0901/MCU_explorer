const movies = [
  // Phase 1
  { title: "Iron Man", year: "2008", genre: "Action",rating:"4.7⭐" ,image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
  { title: "The Incredible Hulk", year: "2008", genre: "Action",rating:"4.1⭐", image: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg" },
  { title: "Iron Man 2", year: "2010", genre: "Action",rating:"4.2⭐", image: "https://m.media-amazon.com/images/I/8171kEgHRRL._UF1000,1000_QL80_.jpg" },
  { title: "Thor", year: "2011", genre: "Fantasy",rating:"4.1⭐", image: "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg" },
  { title: "Captain America: The First Avenger", year: "2011",rating:"4.4⭐", genre: "Action", image: "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_.jpg" },
  { title: "The Avengers", year: "2012", genre: "Action",rating:"4.7⭐", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },

  // Phase 2
  { title: "Iron Man 3", year: "2013", genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg" },
  { title: "Thor: The Dark World", year: "2013", genre: "Fantasy", image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg" },
  { title: "Captain America: The Winter Soldier", year: "2014", genre: "Action", image: "https://assets2.ignimgs.com/2013/10/22/cap4jpg-e95bd7.jpg" },
  { title: "Guardians of the Galaxy", year: "2014", genre: "Sci‑Fi", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { title: "Avengers: Age of Ultron", year: "2015", genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg" },
  { title: "Ant-Man", year: "2015", genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg" },

  // Phase 3
  { title: "Captain America: Civil War", year: "2016", genre: "Action", image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg" },
  { title: "Doctor Strange", year: "2016", genre: "Fantasy", image: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg" },
  { title: "Guardians of the Galaxy Vol. 2", year: "2017", genre: "Sci‑Fi", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aJn9XeesqsrSLKcHfHP4u5985hn.jpg" },
  { title: "Spider-Man: Homecoming", year: "2017", genre: "Action", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { title: "Thor: Ragnarok", year: "2017", genre: "Fantasy", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg" },
  { title: "Black Panther", year: "2018", genre: "Action", image: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg" },
  { title: "Avengers: Infinity War", year: "2018", genre: "Action", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { title: "Ant-Man and the Wasp", year: "2018", genre: "Action", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rv1AWImgx386ULjcf62VYaW8zSt.jpg" },
  { title: "Captain Marvel", year: "2019", genre: "Action", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" },
  { title: "Avengers: Endgame", year: "2019", genre: "Action", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
  { title: "Spider-Man: Far From Home", year: "2019", genre: "Action", image:  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" },

  // Phase 4
  { title: "Black Widow", year: "2021", genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Black_Widow_%282021_film%29_poster.jpg/250px-Black_Widow_%282021_film%29_poster.jpg" },
  { title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", genre: "Action", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3222tgCmi4fX7Ae2qxV83Kmc_iS7v0_Gkiw&s" },
  { title: "Eternals", year: "2021", genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg" },
  { title: "Spider-Man: No Way Home", year: "2021", genre: "Action", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg/250px-Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg" },
  { title: "Doctor Strange in the Multiverse of Madness", year: "2022", genre: "Fantasy", image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" },
  { title: "Thor: Love and Thunder", year:"2022" , genre:" Action/Adventure" , image: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_.jpg"},
{title: "Black Panther: Wakanda Forever", year:"2022" , genre:"Action/Sci-fi " , image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg"},
{title:"Ant-Man and the Wasp: Quantumania" , year:"2023" , genre:"Action/Adventure" , image:"https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg" },
{title:"Guardians of the Galaxy Vol. 3" , year:"2023" , genre:"Action/Adventure " , image:"https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg" },
{title:"The Marvels" , year:"2023" , genre:"Action/Adventure" , image: "https://m.media-amazon.com/images/M/MV5BYzczOWM4MzItMWMyOS00ZDczLWIxMzctNzBmYTgzOTI1MzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
{title: "Deadpool & Wolverine", year:"2024" , genre:"Action/Comedy" , image:"https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg" },
{title: "Captain America: Brave New World", year:"2025" , genre:"Action/Sci-fi" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSmkASGKUoCiJFxI70igRBM5VD7iTZ0Xgog&s" },
{title: "Thunderbolts*", year:"2025" , genre:"Action/Adventure " , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWL32JZSJto5xxuNtT80B1hGPHWAxOQxCjdw&s"}];



const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const toggleTheme = document.getElementById("toggleTheme");

function displayMovies(filter = "") {
  movieGrid.innerHTML = "";

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="info">
        <h3>${movie.title}		| ${movie.rating}</h3>
        <p>${movie.genre}, ${movie.year},</p>
      </div>
    `;
    movieGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  displayMovies(e.target.value);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleTheme.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

window.onload = () => {
  displayMovies();

document.querySelectorAll('#metascoreTable tbody td:nth-child(2)').forEach(td => {
  const score = parseInt(td.textContent);
  td.classList.add(
    score >= 70 ? 'score-good' :
    score >= 50 ? 'score-mid' : 
    'score-bad'
  );
});

document.getElementById('scoreFilter').addEventListener('change', function () {
  const value = this.value;
  const rows = document.querySelectorAll('#metascoreTable tbody tr');

  rows.forEach(row => {
    const scoreCell = row.querySelector('td:nth-child(2)');
    const score = parseInt(scoreCell.textContent);

    row.style.display = "table-row"; 

    if (value === 'good' && score < 70) row.style.display = "none";
    if (value === 'mid' && (score < 50 || score > 69)) row.style.display = "none";
    if (value === 'bad' && score >= 50) row.style.display = "none";
  });
});

};
