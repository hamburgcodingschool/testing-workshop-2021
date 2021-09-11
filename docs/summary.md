0. Why? What? How? When? Who?

Why:
- Security reasons
- When you do a change, it still works
- Refactoring
- Scalability / Robustness
- Preventing bugs
- Documentation

What:
- Checking the log for output
- Input, Expected Output, and Actual Output -> Test fails or succeeds?

How:
- Checking the log for output
- Provide Expected Input
- Provide Error / Malicious Input: What happens if I put a number where a string is expected?

When:
- Test it while writing the code
- Test it during development and test it again in the end when everything's finished
- Test it continuously
- Not test at all!

Who:
- Teresa
- Double pair of eyes: The developer who wrote it and someone else
- Security specialist (from outside the team)
- Small changes I test myself, bigger changes / integration other people (quality experts / QAs) should test

1. Closed-Box Manual Unit Testing

2. Automated Unit Testing

3. Mocking

4. Integration Testing

5. Test-Driven Development (TDD)

6. Functional Testing with Selenium

(7. Testing theory: Test pyramid, coverage, static analysis, testing quadrants)

(8. Bonus topics, e.g. testing randomness / timing)