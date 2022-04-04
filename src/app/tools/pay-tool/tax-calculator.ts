import {BaseKey, LimitKey, PreviousLimitKey, TaxRate} from "./pay-tool.component";

export const federalTaxRates: TaxRate[] = [
  {
    rate: .1,
    singleBase: 0,
    singleLimit: 10275,
    singlePreviousLimit: 0,
    marriedBase: 0,
    marriedLimit: 20550,
    marriedPreviousLimit: 0
  },
  {
    rate: .12,
    singleBase: 1027.50,
    singleLimit: 41775,
    singlePreviousLimit: 10275,
    marriedBase: 2055,
    marriedLimit: 83550,
    marriedPreviousLimit: 20550
  },
  {
    rate: .22,
    singleBase: 4807.50,
    singleLimit: 89075,
    singlePreviousLimit: 41775,
    marriedBase: 9615,
    marriedLimit: 178150,
    marriedPreviousLimit: 83550
  },
  {
    rate: .24,
    singleBase: 15213.50,
    singleLimit: 170050,
    singlePreviousLimit: 89075,
    marriedBase: 30427,
    marriedLimit: 340100,
    marriedPreviousLimit: 178150
  },
  {
    rate: .32,
    singleBase: 34647.50,
    singleLimit: 215950,
    singlePreviousLimit: 170050,
    marriedBase: 69295,
    marriedLimit: 431900,
    marriedPreviousLimit: 340100
  },
  {
    rate: .35,
    singleBase: 49335.50,
    singleLimit: 539900,
    singlePreviousLimit: 215950,
    marriedBase: 98671,
    marriedLimit: 647850,
    marriedPreviousLimit: 431900
  },
  {
    rate: .37,
    singleBase: 162718,
    singlePreviousLimit: 539900,
    marriedBase: 174253.50,
    marriedPreviousLimit: 647850
  },
]

export const stateTaxRates: {[key: string]: {rates: TaxRate[], countyModifier?: number}} = {
  'maryland': {
    // this is the max county rate for maryland
    countyModifier: .032,
    rates: [
      {
        rate: .02,
        singleBase: 0,
        singleLimit: 1000,
        singlePreviousLimit: 0,
        marriedBase: 0,
        marriedLimit: 1000,
        marriedPreviousLimit: 0
      },
      {
        rate: .03,
        singleBase: 20,
        singleLimit: 2000,
        singlePreviousLimit: 1000,
        marriedBase: 20,
        marriedLimit: 2000,
        marriedPreviousLimit: 1000
      },
      {
        rate: .04,
        singleBase: 50,
        singleLimit: 3000,
        singlePreviousLimit: 2000,
        marriedBase: 50,
        marriedLimit: 3000,
        marriedPreviousLimit: 2000
      },
      {
        rate: .0475,
        singleBase: 90,
        singleLimit: 100000,
        singlePreviousLimit: 3000,
        marriedBase: 90,
        marriedLimit: 150000,
        marriedPreviousLimit: 3000
      },
      {
        rate: .05,
        singleBase: 4697.50,
        singleLimit: 125000,
        singlePreviousLimit: 100000,
        marriedBase: 7072.50,
        marriedLimit: 175000,
        marriedPreviousLimit: 150000
      },
      {
        rate: .0525,
        singleBase: 5947.50,
        singleLimit: 150000,
        singlePreviousLimit: 125000,
        marriedBase: 8332.50,
        marriedLimit: 225000,
        marriedPreviousLimit: 175000
      },
      {
        rate: .055,
        singleBase: 7260,
        singleLimit: 250000,
        singlePreviousLimit: 150000,
        marriedBase: 10947.50,
        marriedLimit: 300000,
        marriedPreviousLimit: 225000
      },
      {
        rate: .0575,
        singleBase: 12760,
        singlePreviousLimit: 250000,
        marriedBase: 15072.50,
        marriedPreviousLimit: 300000
      },
    ]
  }
}

export interface PayCheckAnalysis {
  yearly: {
    grossIncome: number;
    netIncome: number;

    totalTaxes: number;
    federalIncomeTaxes: number;
    stateIncomeTaxes: number;
    socialSecurityTaxes: number;
    medicareTaxes: number;

    totalContributions: number;
    retirementContributions: number;
    rothRetirementContributions: number;
    hsaContributions: number;
    insuranceContributions: number;
    esppContributions: number;
    miscellaneousContributions: number;

    federalTaxableIncome: number;
    socialSecurityTaxableIncome: number;
    medicareTaxableIncome: number;
  },
  paycheck: unknown[]
}

export const socialSecurityInfo: {limit: number, rate: number} = {
  limit: 147000,
  rate: 0.062
}

export const medicareInfo: {rate: number} = {
  rate: 0.0145
}

export class TaxCalculator {
  userData = {
    fillingStatus: 'single',
    yearlySalary: 205000,
    yearlyBonus: 205000 * 0.15,
    state: 'maryland',
    customizeDeduction: false,
    deductionAmount: 12950,
    rothRetirement: 0,
    retirement: 21000,
    hsa: 2200,
    numberOfPaychecks: 24
  }

  get taxAnalysis(): PayCheckAnalysis {
    return {
      yearly: {
        grossIncome: this.totalYearlyIncome,
        netIncome: this.totalYearlyIncome - this.totalYearlyTaxes - this.totalContributions,

        totalTaxes: this.totalYearlyTaxes,
        federalIncomeTaxes: this.federalYearlyIncomeTax.taxesPaid,
        stateIncomeTaxes: this.stateYearlyIncomeTax.taxesPaid,
        socialSecurityTaxes: this.socialSecurityYearlyTaxesPaid,
        medicareTaxes: this.medicareYearlyTaxesPaid,

        totalContributions: this.totalContributions,
        retirementContributions: this.userData.retirement,
        rothRetirementContributions: this.userData.rothRetirement,
        hsaContributions: this.userData.hsa,
        // TODO
        insuranceContributions: 0,
        esppContributions: 0,
        miscellaneousContributions: 0,

        federalTaxableIncome: this.totalYearlyFederalTaxableWages,
        socialSecurityTaxableIncome: this.totalYearlyMedicareWages > socialSecurityInfo.limit ? socialSecurityInfo.limit : this.totalYearlyMedicareWages,
        medicareTaxableIncome: this.totalYearlyMedicareWages
      },
      paycheck: this.byPaycheckCompensation
    }
  }

  get byPaycheckCompensation() {
    const ret: unknown[] = []
    let totalEarnings: number = 0, totalTaxableEarnings: number = 0, totalMedicareEarnings: number = 0
    const perPayCheckPay: number = this.userData.yearlySalary / this.userData.numberOfPaychecks
    const perPayCheckFederalTaxes: number = this.federalYearlyIncomeTax.taxesPaid / this.userData.numberOfPaychecks
    const perPayCheckStateTaxes: number = this.stateYearlyIncomeTax.taxesPaid / this.userData.numberOfPaychecks
    // const perPayCheckMedicareTaxes: number = this.medicareYearlyTaxesPaid / this.userData.numberOfPaychecks

    const fixedPerPaycheckTaxes = perPayCheckFederalTaxes + perPayCheckStateTaxes

    for(let i=0; i<this.userData.numberOfPaychecks; i++) {
      totalEarnings += perPayCheckPay
      const currentPaycheckSSTaxable = (perPayCheckPay - (this.userData.hsa / this.userData.numberOfPaychecks))
      let currentSSTaxes = this.getSSTax(totalMedicareEarnings, currentPaycheckSSTaxable)

      totalMedicareEarnings += currentPaycheckSSTaxable
      totalTaxableEarnings += (perPayCheckPay - ((this.userData.hsa + this.userData.retirement) / this.userData.numberOfPaychecks))
      // TODO other deductions
      const deductions = ((this.userData.hsa + this.userData.retirement + this.userData.rothRetirement) / this.userData.numberOfPaychecks)
      ret.push({
        name: `Paycheck ${i + 1}`,
        grossIncome: perPayCheckPay,
        totalTaxes: fixedPerPaycheckTaxes + currentSSTaxes + (currentPaycheckSSTaxable * medicareInfo.rate),
        federalIncomeTaxes: perPayCheckFederalTaxes,
        stateIncomeTaxes: perPayCheckStateTaxes,
        socialSecurityTaxes: currentSSTaxes,
        medicareTaxes: currentPaycheckSSTaxable * medicareInfo.rate,
        netIncome: perPayCheckPay - fixedPerPaycheckTaxes - currentSSTaxes - (currentPaycheckSSTaxable * medicareInfo.rate) - deductions
      })
    }

    if(this.userData.yearlyBonus > 0) {
      const currentSSTaxes = this.getSSTax(totalMedicareEarnings, this.userData.yearlyBonus)
      ret.push({
        name: `Yearly Bonus`,
        grossIncome: this.userData.yearlyBonus,
        totalTaxes: fixedPerPaycheckTaxes + currentSSTaxes,
        federalIncomeTaxes: perPayCheckFederalTaxes,
        stateIncomeTaxes: perPayCheckStateTaxes,
        socialSecurityTaxes: currentSSTaxes,
        medicareTaxes: this.userData.yearlyBonus * medicareInfo.rate,
        netIncome: perPayCheckPay - fixedPerPaycheckTaxes - currentSSTaxes
      })
    }

    return ret
  }

  private getSSTax(previouslyTaxedEarnings: number, newTaxableEarnings: number) {
    if (previouslyTaxedEarnings >= socialSecurityInfo.limit) {
      // user has maxed ss for the year
      return 0;
    } else if (previouslyTaxedEarnings + newTaxableEarnings >= socialSecurityInfo.limit) {
      // partial taxes as this maxes user out for the year
      return (socialSecurityInfo.limit - previouslyTaxedEarnings) * socialSecurityInfo.rate;
    } else {
      // full paycheck is ss taxed
      return(newTaxableEarnings - (this.userData.hsa / this.userData.numberOfPaychecks)) * socialSecurityInfo.rate;
    }
  }

  get totalContributions() {
    // TODO support insurance, misc, espp
    return this.userData.hsa + this.userData.retirement + this.userData.rothRetirement
  }

  get totalYearlyIncome() {
    return this.userData.yearlySalary + this.userData.yearlyBonus
  }

  get totalYearlyTaxes() {
    return this.federalYearlyIncomeTax.taxesPaid + this.stateYearlyIncomeTax.taxesPaid +
      this.socialSecurityYearlyTaxesPaid + this.medicareYearlyTaxesPaid
  }

  get socialSecurityYearlyTaxesPaid() {
    if(this.totalYearlyMedicareWages > socialSecurityInfo.limit) {
      return socialSecurityInfo.limit * socialSecurityInfo.rate
    } else {
      return this.totalYearlyMedicareWages * socialSecurityInfo.rate
    }
  }

  get medicareYearlyTaxesPaid() {
    return this.totalYearlyMedicareWages * medicareInfo.rate;
  }

  get totalYearlyMedicareWages() {
    return this.totalYearlyIncome - this.userData.hsa
  }

  get totalYearlyFederalTaxableWages() {
    return this.totalYearlyIncome - this.totalPretaxDeductions
  }

  get postDeductionWages() {
    return this.totalYearlyFederalTaxableWages - this.userData.deductionAmount;
  }

  get totalPretaxDeductions() {
    return this.userData.hsa + this.userData.retirement;
  }

  get perPaycheckGrossIncome() {
    return this.userData.yearlySalary / this.userData.numberOfPaychecks
  }

  get federalYearlyIncomeTax() {
    const earnings = this.totalYearlyIncome;
    const taxedIncome = this.postDeductionWages;

    return this.calculateMarginalTaxes(earnings, taxedIncome, federalTaxRates);
  }

  get stateYearlyIncomeTax() {
    const earnings = this.totalYearlyIncome;
    const taxedIncome = this.postDeductionWages;

    return this.calculateMarginalTaxes(earnings, taxedIncome, stateTaxRates[this.userData.state].rates, stateTaxRates[this.userData.state].countyModifier)
  }

  private calculateMarginalTaxes(earnings: number, taxedEarnings: number, taxRates: TaxRate[], flatRateModifier: number=0) {
    const limitKey: LimitKey = this.userData.fillingStatus + "Limit" as LimitKey;
    const baseKey: BaseKey = this.userData.fillingStatus + "Base" as BaseKey;
    const previousLimitKey: PreviousLimitKey = this.userData.fillingStatus + "PreviousLimit" as PreviousLimitKey;

    let taxRate: TaxRate = taxRates[0];
    for(const rate of taxRates) {
      if(rate[limitKey]) {
        // @ts-ignore
        if(rate[limitKey] > taxedEarnings) {
          // this is the users max tax bracket
          taxRate = rate;
          break;
        }
      } else {
        // max tax rate applies
        taxRate = rate;
        break;
      }
    }

    const taxesPaid = taxRate[baseKey] + ((taxedEarnings - (taxRate[previousLimitKey] || 0)) * taxRate.rate) + (flatRateModifier * taxedEarnings);
    return {
      taxesPaid,
      marginalTaxRate: taxRate.rate,
      effectiveTaxRateBeforeDeductions: taxesPaid / earnings,
      effectiveTaxRateAfterDeductions: taxesPaid / taxedEarnings
    }
  }
}
