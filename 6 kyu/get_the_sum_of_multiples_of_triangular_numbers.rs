// Get the Sum of Multiples of Triangular Numbers
use num::bigint::BigUint;
use num::bigint::ToBigUint;

fn sum_mult_triangnum(n: u32, m: u32) -> BigUint {
    let mut nums: Vec<BigUint> = vec![];
    for i in 1..=n {
        nums.push((i*(i+1)/2).to_biguint().unwrap());
    }
    println!("{nums:?}");
    let mut mults: Vec<BigUint> = vec![];
    let mut counter = nums.iter().last().unwrap().clone();
    while  (mults.len() as u32) < m {
        if nums.iter().all(|n| &counter % n == 0.to_biguint().unwrap()) {
            mults.push(counter.clone());
        }
        counter += 1.to_biguint().unwrap();
    }
    println!("{mults:?}");
    return mults.iter().sum()
}
