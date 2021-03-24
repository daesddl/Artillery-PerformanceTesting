# Artillery-PerformanceTesting
Third Assessment - Wizeline Workshop - API Performance Testing

Author: Daniel Espinosa

email: daes.ddl@gmail.com

---

# Reminders:

To execute the performance test, make sure you have todoist API_KEY under your environment

To set your API_KEY do the following:

# Windows users:

- Under Command Prompt:
```powershell
      set todoist_TOKEN "your API key"
```
 or
 
```powershell
      setx todoist_TOKEN "your API key"
```

- Dotenv File
  
  Generate a ".env" file with the inner code:
```env
    export todoist_TOKEN="your API key"
```

# MAC / Linux users:

- Under Terminal
```console
    export todoist_TOKEN="your API key"
```

---

# Executing Performance Testing

Using NPM Script declared in package.json file
```console
    npm run testPerformance
```

Inner Script
```json
    "testPerformance": "artillery run --output results/report.json performance.yml && artillery report --output results/report.html results/report.json"
```

Script will report the performance test executed though Artillery to the YAML file.

---

# Configuration Settings

Modify the duration and arrivalRate paramaters to configure the Performance Test

- duration: Time in which the Performance Test will be executed. Request will be executed over and over until the Duration time expires.
- arrivalRate: Amount of Virtual connections at time.

```diff
- Note: API Request may be compromised according to the Server attending every request, it can be interpreted as a potential attack.
```
