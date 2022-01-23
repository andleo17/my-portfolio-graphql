import { Arg, Field, InputType, Mutation, Resolver } from 'type-graphql';
import nodemailer from 'nodemailer';

@InputType()
export class SendMailInput {
	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	subject: string;

	@Field()
	content: string;
}

@Resolver()
export default class ContactResolver {
	formatContent(data: SendMailInput) {
		return `
		<div>
			<b>De: ${data.name} &lt;${data.email}&gt;</b>
			<p>
				${data.content.replaceAll('\n', '<br/>')}
			<p>
		</div>`;
	}

	@Mutation(() => Boolean)
	async sendMail(@Arg('data') data: SendMailInput): Promise<boolean> {
		try {
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.EMAIL_ACCOUNT,
					pass: process.env.EMAIL_PASSWORD,
				},
			});
			//
			await transporter.sendMail({
				from: `${data.name} <${data.email}>`,
				to: process.env.EMAIL_ACCOUNT,
				subject: 'Contacto | ' + data.subject,
				html: this.formatContent(data),
			});

			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
