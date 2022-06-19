class Movie {
  Nazovfilmu;
  rok;
  herci = [];

  constructor(x, y, z) {
    this.Nazovfilmu = x;
    this.rok = y;
    this.herci = z;
  }

  printdetail = () => {
    console.log(
      "Názov filmu:   " + this.Nazovfilmu,
      "\n" + "Rok Vydania:   " + this.rok,
      "\n" + "Herci:  "
    );

    let zzz = this.herci.split(",");
    let xxx = zzz.length;
    let fff = xxx - 1;
    for (let i = 0; i <= fff; i++) {
      console.log(zzz[i] + "\n");
    }
  };

  printLongestActor = () => {
    let Najdlhsie = this.herci.split(",");
    let MenoHerca = Najdlhsie.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });
    console.log("Najdlhšie meno herca v tomto filme: " + MenoHerca);
  };
}

const Herci1 =
  "Keanu Reeves," +
  "Stellan Skarsgård," +
  "Zendaya," +
  "Dave Bautista," +
  "David Dastmalchian";

const movie = new Movie("Matrix", 1999, Herci1);
movie.printdetail();
movie.printLongestActor();

const Herci2 =
  "Abigail Breslin, " +
  "Steve Carell," +
  "Toni Collette," +
  "Greg Kinnear," +
  "Alan Arkin," +
  "Paul Dano," +
  "Beth Grant," +
  "Dean Norris," +
  "Wallace Langham," +
  "Geoff Meed," +
  "Mary Lynn Rajskub," +
  "Julio Oscar Mechoso," +
  "Justin Shilton," +
  "Bryan Cranston," +
  "Paula Newsome," +
  "Lauren Shiohama," +
  "John Walcutt," +
  "Gordon Thomson," +
  "Marc Turtletaub," +
  "Mel Rodriguez," +
  "Matt Winston," +
  "Jill Talley," +
  "Brenda Canela";

const movie2 = new Movie("Malá Miss Sunshine", 2006, Herci2);
movie2.printdetail();
movie2.printLongestActor();
