// Bài 1: Chuyển từ độ C sang độ F (dùng if/else)
function cToF(celsius) {
    if (typeof celsius === 'number') {
        return celsius * 9 / 5 + 32;
    } else {
        return "Giá trị không hợp lệ";
    }
}
// Bài 2: Chuyển từ mét sang feet (dùng if lồng nhau)
function meterToFeet(meter) {
    if (typeof meter === 'number') {
        if (meter >= 0) {
            return meter * 3.2808;
        } else {
            return "Chiều dài không thể âm";
        }
    } else {
        return "Giá trị không hợp lệ";
    }
}
// Bài 3: Tính diện tích hình vuông khi biết cạnh a (dùng if đơn)
function squareArea(a) {
    if (a > 0) {
        return a * a;
    }
    return "Cạnh phải lớn hơn 0";
}
// Bài 4: Tính diện tích hình chữ nhật khi biết 2 cạnh a, b (dùng if/else)
function rectangleArea(a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    } else {
        return "Cạnh phải dương";
    }
}
// Bài 5: Diện tích tam giác vuông (dùng if bậc thang)
function rightTriangleArea(a, b) {
    if (a <= 0 || b <= 0) {
        return "Cạnh phải dương";
    } else if (a === b) {
        return `Tam giác vuông cân, diện tích: ${(a * b) / 2}`;
    } else {
        return (a * b) / 2;
    }
}
// Bài 6: Giải phương trình bậc 1 ax + b = 0 (dùng if lồng nhau)
function solveLinear(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Vô số nghiệm";
        } else {
            return "Vô nghiệm";
        }
    } else {
        return -b / a;
    }
}
// Bài 7: Giải phương trình bậc 2 ax² + bx + c = 0 (dùng if bậc thang)
function solveQuadratic(a, b, c) {
    if (a === 0) {
        return solveLinear(b, c);
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "Vô nghiệm";
    } else if (delta === 0) {
        return `Nghiệm kép: x = ${-b / (2 * a)}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Hai nghiệm: x1 = ${x1}, x2 = ${x2}`;
    }
}
// Bài 8: Kiểm tra tuổi hợp lệ (dùng switch-case giả lập)
function isValidAge(age) {
    switch (true) {
        case (typeof age !== 'number' || !Number.isInteger(age)):
            return "Không phải số nguyên";
        case (age <= 0):
            return "Tuổi phải lớn hơn 0";
        case (age >= 120):
            return "Tuổi phải nhỏ hơn 120";
        default:
            return "Tuổi hợp lệ";
    }
}
// Bài 9: Kiểm tra tam giác (dùng if lồng và if bậc thang)
function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Cạnh phải dương";
    } else if (a + b > c && a + c > b && b + c > a) {
        return "Là tam giác";
    } else {
        return "Không phải tam giác";
    }
}