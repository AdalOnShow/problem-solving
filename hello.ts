function maxDivScore(nums: number[], divisors: number[]): number {
  const scores: [number, number][] = [];

  for (const divisor of divisors) {
    const count = nums.filter((num) => num % divisor === 0).length;
    scores.push([count, divisor]);
  }

  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  return scores[0][1];
}
