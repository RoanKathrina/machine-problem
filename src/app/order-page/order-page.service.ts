import { Subject } from 'rxjs';


export class OrderPageService {
    private burgers = {
        BurgerRoan: 0,
        CheeseBurger: 0,
        BigMac: 0,
        CheeseBurgerDeLuxe: 0,
        CheesyBurgerRoan: 0,
        DoubleCheeseBurger: 0,
        FilletOFish: 0,
        McChicken: 0,
        QuarterPounderWithCheese: 0,
        BullyBoy: 0
    }

    private burgerPrices = {
        BurgerRoan: 35,
        CheeseBurger: 57,
        BigMac: 149,
        CheeseBurgerDeLuxe: 93,
        CheesyBurgerRoan: 47,
        DoubleCheeseBurger: 116,
        FilletOFish: 120,
        McChicken: 120,
        QuarterPounderWithCheese: 149,
        BullyBoy: 285
    }
    private totalPrice: number = 0;

    burger = new Subject<any>();
    constructor() {}

    getBurgerTotal(burgerType: string) {
        return this.burgers[burgerType];
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    clearBurgerCount() {
        this.burgers.BurgerRoan = 0;
        this.burgers.CheeseBurger = 0;
        this.burgers.BigMac = 0;
        this.burgers.CheeseBurgerDeLuxe= 0;
        this.burgers.CheesyBurgerRoan = 0;
        this.burgers.DoubleCheeseBurger = 0;
        this.burgers.FilletOFish = 0;
        this.burgers.McChicken = 0;
        this.burgers.QuarterPounderWithCheese = 0;
        this.burgers.BullyBoy = 0;
    }

    clearTotalPrice() {
        this.totalPrice = 0;
    }

    deleteItem(burgerType: string) {
        let burgerTotal = this.burgers[burgerType];
        burgerTotal = burgerTotal - 1;
        this.burgers[burgerType] = burgerTotal;

        let totalPrice = this.totalPrice - this.burgerPrices[burgerType];
        this.totalPrice = totalPrice;
    }

    addItem(burgerType: string) {
        let burgerTotal = this.burgers[burgerType];
        burgerTotal = burgerTotal + 1;
        this.burgers[burgerType] = burgerTotal;

        let totalPrice = this.totalPrice + this.burgerPrices[burgerType];
        this.totalPrice = totalPrice;
    }

}