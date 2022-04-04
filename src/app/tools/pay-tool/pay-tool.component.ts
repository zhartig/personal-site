import { Component, OnInit } from '@angular/core';
import {TaxCalculator} from "./tax-calculator";

export interface TaxRate {
  singleBase: number
  marriedBase: number
  rate: number;
  singleLimit?: number;
  singlePreviousLimit?: number;
  marriedLimit?: number;
  marriedPreviousLimit?: number;
}

export interface TaxInfo {
  grossPay: number
  netPay: number
  totalTaxesPaid: number
  taxes: {
    federalTaxesPaid: number,
    socialSecurityTaxesPaid: number,
    medicareTaxesPaid: number,
    stateTaxesPaid?: number
  }
}

export interface TaxAnalysis {
  federalTaxInfo: FederalTaxInfo
  socialSecurityTaxedEarnings: number,
  medicareTaxedEarnings: number,
  totals: TaxInfo,
  byPayCheck: TaxInfo[]
}

export interface PreTaxDeductions {
  retirement401k: number,
  hsa: number,
  ira: number
}

export interface FederalTaxInfo {
  federalTaxesPaid: number
  federalTaxedIncome: number,
  marginalTaxRate: number,
  effectiveTaxRateBeforeDeductions: number
  effectiveTaxRateAfterDeductions: number
}

export type LimitKey = 'singleLimit' | 'marriedLimit'
export type PreviousLimitKey = 'singlePreviousLimit' | 'marriedPreviousLimit'
export type BaseKey = 'singleBase' | 'marriedBase'

@Component({
  selector: 'app-pay-tool',
  templateUrl: './pay-tool.component.html',
  styleUrls: ['./pay-tool.component.css']
})
export class PayToolComponent implements OnInit {

  taxYear: number = 2022;
  stateTaxRates: {[key: string]: TaxRate[]} = {
    maryland: [

    ]
  }
  standardDeductions: {[key: string]: number} = {
    'single': 12950,
    'married': 25900
  }

 monthlyHeaders = ['Name', 'Gross Income', 'Net Income', 'Total Taxes', 'Federal Taxes', 'State Taxes', 'Social Security Taxes', 'Medicare Taxes']

  taxCalculator: TaxCalculator

  constructor() {
    this.taxCalculator = new TaxCalculator()
  }

  ngOnInit(): void {

  }

  //
  // calculateTaxes(): TaxAnalysis {
  //   const perPaycheckPay = this.yearlySalary / this.numberOfPayCycles();
  //   const totalYearlyEarnings = this.yearlySalary + this.yearlyBonus;
  //   const federalTaxes = this.calculateFederalTaxes(totalYearlyEarnings);
  //   const ssTaxes = this.calculateSSTax((this.yearlySalary - this.pretaxDeductions.hsa) / this.numberOfPayCycles());
  //
  //   const byPayCheck: TaxInfo[] = [];
  //   for(let i=0; i<this.numberOfPayCycles(); i++) {
  //     const paycheckTaxes = {
  //       federalTaxesPaid: federalTaxes.federalTaxesPaid / this.numberOfPayCycles(),
  //       medicareTaxesPaid: ((this.yearlySalary - this.pretaxDeductions.hsa) / this.numberOfPayCycles()) * this.medicareInfo.rate,
  //       socialSecurityTaxesPaid: ssTaxes.byPayCheck[i],
  //       stateTaxesPaid: 0,
  //     }
  //     const grossPay = perPaycheckPay;
  //     const netPay = grossPay - this.sumTaxes(paycheckTaxes) - (this.pretaxDeductions.retirement401k / this.numberOfPayCycles());
  //     byPayCheck.push({
  //       grossPay,
  //       netPay,
  //       totalTaxesPaid: this.sumTaxes(paycheckTaxes),
  //       taxes: paycheckTaxes
  //     })
  //   }
  //
  //   return {
  //     byPayCheck,
  //     federalTaxInfo: federalTaxes,
  //     medicareTaxedEarnings: totalYearlyEarnings,
  //     socialSecurityTaxedEarnings: ssTaxes.socialSecurityTaxedEarnings,
  //     totals: {
  //       grossPay: totalYearlyEarnings,
  //       netPay: totalYearlyEarnings - federalTaxes.federalTaxesPaid,
  //       totalTaxesPaid: federalTaxes.federalTaxesPaid,
  //       taxes: {
  //         federalTaxesPaid: federalTaxes.federalTaxesPaid,
  //         medicareTaxesPaid: 0,
  //         socialSecurityTaxesPaid: ssTaxes.socialSecurityTaxesPaid,
  //         stateTaxesPaid: 0
  //       }
  //     }
  //   }
  // }
  //
  // calculateSSTax(payPerPayCheck: number) {
  //   const ssTaxes = [];
  //   let ssTaxedWages = 0, totalSSTaxesPaid = 0;
  //   for(let payCheck=0; payCheck<this.numberOfPayCycles(); payCheck++) {
  //     if(ssTaxedWages >= this.socialSecurityInfo.limit ) {
  //       // user has maxed ss for the year
  //       ssTaxes.push(0);
  //     } else if(ssTaxedWages + payPerPayCheck >= this.socialSecurityInfo.limit) {
  //       // partial taxes as this maxes user out for the year
  //       const ssTax = (this.socialSecurityInfo.limit - ssTaxedWages) * this.socialSecurityInfo.rate;
  //       ssTaxes.push(ssTax);
  //       totalSSTaxesPaid += ssTax;
  //       ssTaxedWages = this.socialSecurityInfo.limit;
  //     } else {
  //       // full paycheck is ss taxed
  //       ssTaxes.push(payPerPayCheck * this.socialSecurityInfo.rate);
  //       totalSSTaxesPaid += payPerPayCheck * this.socialSecurityInfo.rate;
  //       ssTaxedWages += payPerPayCheck;
  //     }
  //   }
  //
  //   // TODO bonus
  //
  //   return {
  //     socialSecurityTaxesPaid: totalSSTaxesPaid,
  //     socialSecurityTaxedEarnings: ssTaxedWages,
  //     byPayCheck: ssTaxes
  //   }
  // }
  //
  // calculateFederalTaxes(earnings: number): FederalTaxInfo {
  //   const taxedIncome: number = earnings - this.deductionAmount - this.totalPretaxDeductions();
  //   const limitKey: LimitKey = this.fillingStatus + "Limit" as LimitKey;
  //   const baseKey: BaseKey = this.fillingStatus + "Base" as BaseKey;
  //   const previousLimitKey: PreviousLimitKey = this.fillingStatus + "PreviousLimit" as PreviousLimitKey;
  //   let taxRate: TaxRate = this.federalTaxRates[0];
  //   for(const rate of this.federalTaxRates) {
  //     if(rate[limitKey]) {
  //       // @ts-ignore
  //       if(rate[limitKey] > taxedIncome) {
  //         // this is the users max tax bracket
  //         taxRate = rate;
  //         break;
  //       }
  //     } else {
  //       // max tax rate applies
  //       taxRate = rate;
  //       break;
  //     }
  //   }
  //
  //   const federalTaxesPaid = taxRate[baseKey] + ((taxedIncome - (taxRate[previousLimitKey] || 0)) * taxRate.rate);
  //   return {
  //     federalTaxesPaid,
  //     federalTaxedIncome: taxedIncome,
  //     marginalTaxRate: taxRate.rate,
  //     effectiveTaxRateBeforeDeductions: federalTaxesPaid / earnings,
  //     effectiveTaxRateAfterDeductions: federalTaxesPaid / taxedIncome
  //   }
  // }

}
