function convertDataSize() {
  const size = parseFloat(document.getElementById('size').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  const units = {
    bit: 1,
    B: 8,
    Kib: 1024,
    Mib: 1024 ** 2,
    Gib: 1024 ** 3,
    Tib: 1024 ** 4,
    Pib: 1024 ** 5,
    Eib: 1024 ** 6,
    ZiB: 1024 ** 7,
    YiB: 1024 ** 8,
    Kibit: 1024,
    Mibit: 1024 ** 2,
    Gibit: 1024 ** 3,
    Tibit: 1024 ** 4,
    Pibit: 1024 ** 5,
    Eibit: 1024 ** 6,
    Zibit: 1024 ** 7,
    Yibit: 1024 ** 8,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
    PB: 8000000000000000,
    EB: 8000000000000000000n,
    ZB: 8000000000000000000000n,
    YB: 8000000000000000000000000n,
    Kb: 8000,
    Mb: 8000000,
    Gb: 8000000000,
    Tb: 8000000000000,
    Pb: 8000000000000000,
    Eb: 8000000000000000000n,
    Zb: 8000000000000000000000n,
    Yb: 8000000000000000000000000n,
  };

  if (!units[fromUnit] || !units[toUnit]) {
    alert('Invalid units provided');
    return;
  }

  const result = (size * units[fromUnit]) / units[toUnit];
  document.getElementById('result').innerHTML = `${size} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}