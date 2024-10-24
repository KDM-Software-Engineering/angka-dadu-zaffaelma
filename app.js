function main() {
    const hasilDadu = [1, 5, 2, 6, 2, 3]
    kemunculanGanjil = 0
    kemunculanGenap = 0
    for(let i=0; i < hasilDadu.length; i++){
      if (hasilDadu[i]%2!==0){
          kemunculanGanjil++;
      } else{
          kemunculanGenap++;
      }
    }
    console.log(`Raka mendapatkan angka ganjil sebanyak ${kemunculanGanjil} kali dan angka genap sebanyak ${kemunculanGenap} kali`)
  }
  main()
  module.exports = main