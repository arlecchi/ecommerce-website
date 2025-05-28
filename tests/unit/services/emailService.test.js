const EmailService = require('../../../src/services/emailService');

describe('EmailService', () => {
  let emailService;

  beforeEach(() => {
    emailService = new EmailService();
  });

  describe('sendEmail', () => {
    test('should send email successfully', async () => {
      const emailData = {
        to: 'test@example.com',
        subject: 'Test',
        body: 'Test body'
      };

      // Mock external API call
      jest.spyOn(emailService, 'sendToProvider').mockResolvedValue({ messageId: 'abc123' });

      const result = await emailService.sendEmail(emailData);

      expect(result).toHaveProperty('messageId');
      expect(emailService.sendToProvider).toHaveBeenCalledWith(emailData);
    });

    test('should handle email sending failure', async () => {
      const emailData = { to: 'test@example.com' };

      jest.spyOn(emailService, 'sendToProvider').mockRejectedValue(new Error('Provider error'));

      await expect(emailService.sendEmail(emailData)).rejects.toThrow('Failed to send email');
    });

    test('should retry failed emails', async () => {
      const emailData = { to: 'test@example.com' };

      jest
        .spyOn(emailService, 'sendToProvider')
        .mockRejectedValueOnce(new Error('Temporary error'))
        .mockResolvedValue({ messageId: 'abc123' });

      const result = await emailService.sendEmail(emailData);

      expect(result).toHaveProperty('messageId');
      expect(emailService.sendToProvider).toHaveBeenCalledTimes(2);
    });
  });
});
