//Buffer是用来存放二进制数据的容器，类似一个数组

//const buf1 = Buffer.from('hello');
//console.log(buf1);//<Buffer 68 65 6c 6c 6f>

const buf2 = Buffer.from('你很好');
console.log(buf2);//<Buffer e6 88 91 e5 be 88 e5 a5 bd>

const buf3 = Buffer.alloc(10);//size <integer> 新建的 Buffer 的长度。
console.log(buf3);//<Buffer 00 00 00 00 00 00 00 00 00 00>
buf3[0] = 10;//把10当做十进制转成十六进制
console.log(buf3);//<Buffer 0a 00 00 00 00 00 00 00 00 00>
buf3[1] = 0x10;//前面加0x意思是把10当做十六进制中的10，就不用转换了
console.log(buf3);//<Buffer 0a 10 00 00 00 00 00 00 00 00>
buf3[10] = 9;
console.log(buf3);//<Buffer 0a 10 00 00 00 00 00 00 00 00>因为只有10位，所以添加不上


//一个二进制的0 或者 1 代表了 1bit(位)
//8bit(位) = 1B(字节) = 2个16进制数。1个英文字符 = 1B，1个汉字 = 3B。
//00000000 - 11111111
/*16进制就有16个数，0~15，用二进制表示15的方法就是1111，从而可以推断出，
16进制用2进制可以表现成0000~1111，顾名思义，也就是每四个为一位。*/


const buf4 = Buffer.alloc(9);
buf4[0] = 0xe5;
buf4[1] = 0xa5;
buf4[2] = 0xbd;
console.log(buf4.toString());
