export function inss(salary: number) {
    let inss = 0

    if (salary < 1300) {
        inss = salary * 0.06
    } else if (salary >= 1300 && salary < 1800) {
        inss = salary * 0.08
    } else if (salary >= 1800 && salary < 3000) {
        inss = salary * 0.10
    } else {
        inss = salary * 0.12
    }

    return inss
}

export function irf(salary: number) {
    let irf = 0

    if (salary > 1900) {
        irf = salary * 0.08
    }

    return irf
}

export function tranportationVauchers(salary: number) {
    return parseFloat((salary * 0.06).toFixed(2))
}

export function salaryReceived(salary: number ) {
    return salary - inss(salary) - irf(salary) - tranportationVauchers(salary)
}