for (let i = 0; i < 5; i++)
{
  let row = '';

  for (let j = 0; j < 5; j++)
  {
    if (i === 0 || j === 0 || j === 4 || i === 2)
    {
      row += ' *';
    } else
    {
      row += '  ';
    }
  }

  for (let space = 1; space > 0; space--)
  {
    row += '  ';
  }

  for (let j = 0; j < 5; j++)
  {
    if (i === 0 || i === 4 || i === 4 - j)
    {
      row += ' *';
    } else
    {
      row += '  ';
    }
  }

  console.log(row);
}
