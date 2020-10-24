const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
	process.stdout.write('Fala Anonima!\n')

	process.exit() //Finaliza o processo

} else {
	process.stdout.write('Informe o seu nome: ')
	process.stdin.on('data', data => {
		const nome = data.toString().replace('\n', '')

		process.stdout.write(`Fala ${nome}\n`)

		process.exit()
	})
}

/* Sa�da padr�o: stdout
 * Entrada padr�o: stdin
 * .on('data',...) � um evendo com 'data' que ocorre quando o usu�rio nesse caso aperta a tecla Enter depois de digitar os dados
 * No caso do evento com data o Enter vem junto com os dados, por isso foi utilizado o .replace para retirar esse enter dos dados que foi digitado*/