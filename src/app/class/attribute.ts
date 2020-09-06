export class Attribute {
    private female: number;
    private fat: number;
    private ota: number;
    private gyudon: number;
    private ushi: number;
    private seitouha: number;
    private ikiri: number;
    private zen: number;
    private hinekure: number;
    private mukiryoku: number;
    private kojirase: number;
    private kaminokenashi: number;
    private osyarekaminoke: number;
    private osyare: number;
    private mama: number;
    private fate: number;

    constructor(female: number,
        fat: number,
        ota: number,
        gyudon: number,
        ushi: number,
        seitouha: number,
        ikiri: number,
        zen: number,
        hinekure: number,
        mukiryoku: number,
        kojirase: number,
        kaminokenashi: number,
        osyarekaminoke: number,
        osyare: number,
        mama: number,
        fate: number,
    ) {
        this.female = female
        this.fat = fat
        this.ota = ota
        this.gyudon = gyudon
        this.ushi = ushi
        this.seitouha = seitouha
        this.ikiri = ikiri
        this.zen = zen
        this.hinekure = hinekure
        this.mukiryoku = mukiryoku
        this.kojirase = kojirase
        this.kaminokenashi = kaminokenashi
        this.osyarekaminoke = osyarekaminoke
        this.osyare = osyare
        this.mama = mama
        this.fate = fate

    }
    setFemale(female: number) { this.female = female }
    getFemale() { return this.female }
    setFat(fat: number) { this.fat = fat }
    getFat() { return this.fat }
    setOta(ota: number) { this.ota = ota }
    getOta() { return this.ota }
    setGyudon(gyudon: number) { this.gyudon = gyudon }
    getGyudon() { return this.gyudon }
    setUshi(ushi: number) { this.ushi = ushi }
    getUshi() { return this.ushi }
    setSeitouha(seitouha: number) { this.seitouha = seitouha }
    getSeitouha() { return this.seitouha }
    setIkiri(ikiri: number) { this.ikiri = ikiri }
    getIkiri() { return this.ikiri }
    setZen(zen: number) { this.zen = zen }
    getZen() { return this.zen }
    setHinekure(hinekure: number) { this.hinekure = hinekure }
    getHinekure() { return this.hinekure }
    setMukiryoku(mukiryoku: number) { this.mukiryoku = mukiryoku }
    getMukiryoku() { return this.mukiryoku }
    setKojirase(kojirase: number) { this.kojirase = kojirase }
    getKojirase() { return this.kojirase }
    setKaminokenashi(kaminokenashi: number) { this.kaminokenashi = kaminokenashi }
    getKaminokenashi() { return this.kaminokenashi }
    setOsyarekaminoke(osyarekaminoke: number) { this.osyarekaminoke = osyarekaminoke }
    getOsyarekaminoke() { return this.osyarekaminoke }
    setOsyare(osyare: number) { this.osyare = osyare }
    getOsyare() { return this.osyare }
    setMama(mama: number) { this.mama = mama }
    getMama() { return this.mama }
    setFate(fate: number) { this.fate = fate }
    getFate() { return this.fate }

}


