// 1. Buat sebuah class dengan nama Person.
// Class Person memiliki property sebagai berikut:
// - name
// - age
// - gender
// - height
// Class tersebut juga memiliki method sebagai berikut:
// - setName(name) -> untuk menyimpan name
// - setAge(age) -> untuk menyimpan age
// - setGender(gender) -> untuk menyimpan gender
// - setHeight(height) -> untuk menyimpan height
// - getName(name) -> untuk mengambil name
// - getAge(age) -> untuk mengambil age
// - getGender(gender) -> untuk mengambil gender
// - getHeight(height) -> untuk mengambil height

class Person {
    name;
    age;
    gender;
    height;

    constructor(name, age, gender, height){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }
    
    setGender(gender) {
        this.gender = gender;
    }

    setHeight(height) {
        this.height = height;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
    
    getGender() {
        return this.gender;
    }

    getHeight() {
        return this.height;
    }
}

const irfi = new Person("Irfiyanda", 19, "Male", 165);
irfi.setName("Irfiyanda Abidin");
irfi.setAge(20);
irfi.setGender("Laki laki");
irfi.setHeight(166);
console.log(irfi)
let irfiName = irfi.getName();
let irfiAge = irfi.getAge();
let irfiGender = irfi.getGender();
let irfiHeight = irfi.getHeight();
console.log(`
    Nama    : ${irfiName}
    Age     : ${irfiAge}
    Gender  : ${irfiGender}
    Height  : ${irfiHeight}
`)
console.log("====================================")


// 2. Buat sebuah class dengan nama Student. Class ini akan menyimpan nama, NIM dan daftar nilai (disimpan dalam array) dari seorang mahasiswa. Di class ini juga dapat melakukan penambahaan data nilai baru ke dalam daftar nilai, mengambil nilai rata rata dari daftar nilai, dan menentukan predikat (A, B+, B, C+, C, D, E).

class Student {
    nama = '';
    nim = ''
    daftarNilai = [];
    
    constructor(nama, nim, daftarNilai){
        this.nama = nama
        this.nim = nim
        this.daftarNilai = daftarNilai
    }

    tambahNilai(nilaiBaru){
        this.daftarNilai.push(nilaiBaru);
    }

    rataRata(){
        let total = 0;
        for(let i = 0; i < this.daftarNilai.length; i++){
            total += this.daftarNilai[i]
            if (i == this.daftarNilai.length-1){
                return total / this.daftarNilai.length;
            }
        }
    }

    predikat(rataRata){
        if (rataRata == undefined){
            console.error("Masukkan nilai rata rata pada parameter")
        }
            
        if (rataRata > 95){
            return "A"
        } else if (rataRata > 90) {
            return "B+"
        } else if (rataRata > 85) {
            return "B"
        } else if (rataRata > 80) {
            return "C+"
        } else if (rataRata > 75) {
            return "C"
        } else if (rataRata > 70) {
            return "D"
        } else {
            return "E"
        }
    }
}

const yanda = new Student('irfiyanda', 21014623, [80,70,80])
yanda.tambahNilai(90)
let yandaRataRata = yanda.rataRata()
let yandaPredikat = yanda.predikat(yandaRataRata)
console.log(yandaRataRata)
console.log(yandaPredikat)
console.log("====================================")
