import { validate } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

describe('CreateUserDto', () => {
  it('should pass validation with valid data', async () => {
    const dto = Object.assign(new CreateUserDto(), {
      username: 'johndoe',
      email: 'john@example.com',
      password: 'securepass123',
    });
    const errors = await validate(dto);
    expect(errors).toHaveLength(0);
  });

  it('should reject invalid email', async () => {
    const dto = Object.assign(new CreateUserDto(), {
      username: 'johndoe',
      email: 'not-an-email',
      password: 'securepass123',
    });
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors.some((e) => e.property === 'email')).toBe(true);
  });

  it('should reject short password', async () => {
    const dto = Object.assign(new CreateUserDto(), {
      username: 'johndoe',
      email: 'john@example.com',
      password: 'short',
    });
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors.some((e) => e.property === 'password')).toBe(true);
  });
});
