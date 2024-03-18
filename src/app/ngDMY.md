const strings = ['  apple  ', ' banana ', '  orange  ', 'grape', 'Watermelon'];
    console.log(strings)

    //Loại bỏ các khoảng trăng đư thừa đầu và cuối mỗi chuỗi
    let str1 = strings.map((value: string) => {
      return value.trim();
    })
    console.log('Loại bỏ các khoảng trăng đư thừa đầu và cuối mỗi chuỗi')
    console.log(str1)

    //Kiểm tra mảng có chứa ít nhất một chuối là một mảng con không
    let inlucdeArr = strings.some(value => {
      return Array.isArray(value);
    })
    console.log('Kiểm tra mảng có chứa ít nhất một chuối là một mảng con không')
    console.log(inlucdeArr)

    //In ra moi chuoi da duoc in hoa chu cai dau tien
    let str3 = str1.map((value: string) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    console.log('In ra moi chuoi da duoc in hoa chu cai dau tien')
    console.log(str3)

    //Loc ra cac chuoi co do dai > 3
    let str4 = strings.filter(value => {
      return value.length > 5;
    })
    console.log('Loc ra cac chuoi co do dai > 5')
    console.log(str4)

    //Tinh tong do dai cua tat ca cac chuoi
    let newArr = strings.reduceRight((total: string, value: string) => {
      return total += value;
    })
    console.log('Tinh tong do dai cua tat ca cac chuoi')
    console.log(newArr)

    //Tinh tong do dai cua tat ca cac chuoi tu phai qua trai
    let newArrr = strings.reduceRight((total: string, value: string) => {
      return total += value;
    })
    console.log('Tinh tong do dai cua tat ca cac chuoi tu phai qua trai')
    console.log(newArrr)


    //Kiem tra tat ca cac chuoi co chua a hay khong
    let includeA = strings.every(value => {
       return value.includes('a')
    })
    console.log('Kiem tra tat ca cac chuoi co chua a hay khong')
    console.log(includeA)

    //Kiem tra its nhat 1 chuoi co chua p hay khong
    let includeP = strings.some(value => {
      return value.includes('p')
    })
    console.log('Kiem tra its nhat 1 chuoi co chua p hay khong')
    console.log(includeP)

    //Tim chi so chuuoi 'apple'
    let idx = str1.indexOf('apple');
    console.log('Tim chi so chuuoi \'apple\'')
    console.log(idx)
