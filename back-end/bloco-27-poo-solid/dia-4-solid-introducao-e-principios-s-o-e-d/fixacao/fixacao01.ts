export default function progressNotification(
  message: string,
  notificationType: string
): void {
  // switch (notificationType) {
  //   case 'Email':
  //     console.log('Email: ', message);
  //     break;
  //   case 'Phone':
  //     console.log('Phone: ', message);
  //     break;
  //   case 'Console':
  //     console.log('Console: ', message)
  //     break;
  // }
  console.log(`${notificationType}: ${message}`);
};

progressNotification('O rato roeu a Roupa do Rei de Roma!', 'Email');
