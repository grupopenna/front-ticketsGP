// export const formatDate = (dateString: string) => {
//   if (!dateString) return '';

//   const date = new Date(dateString);
//   const day = String(date.getUTCDate()).padStart(2, '0');
//   const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
//   const year = String(date.getUTCFullYear()).slice(2); // Tomar los últimos dos dígitos del año
//   const hours = String(date.getUTCHours()).padStart(2, '0');
//   const minutes = String(date.getUTCMinutes()).padStart(2, '0');

//   return `${day}/${month}/${year} ${hours}:${minutes}`;
// };

export const formatDate = (isoDate: string) => {
  if (!isoDate) return '';

  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires',
  };

  return new Intl.DateTimeFormat('es-AR', options).format(date);
};


export const getDate = ()=> new Date().toISOString();