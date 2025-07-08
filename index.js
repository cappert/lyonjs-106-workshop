function generateTriangle(n) {
    // Generates Pascal's Triangle up to the nth row
    // n is the number of rows to generate
    // Returns an array of arrays representing the triangle
    if (n <= 0) return [];
    const triangle = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }
    return triangle;
    
}

generateTriangle(5).forEach(row => console.log(row.join(' ')));