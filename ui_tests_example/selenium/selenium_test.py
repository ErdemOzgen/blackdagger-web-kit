from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json


chrome_options = webdriver.ChromeOptions()
#chrome_options.add_extension("../dist/chrome_8.4.3.zip")
chrome_options.add_argument('--load-extension=/Users/bptk/dev/pentestkit/src')
#chrome_options.add_argument("--headless=new")
driver = webdriver.Chrome(options=chrome_options)

driver.get("http://demo.testfire.net")
time.sleep(1)
driver.execute_script("window.postMessage({'bptk_rattacker':'start'});")
time.sleep(1)

driver.set_window_size(2150, 1235)
driver.find_element(By.CSS_SELECTOR, "font").click()
driver.find_element(By.ID, "uid").click()
driver.find_element(By.ID, "uid").send_keys("admin")
driver.find_element(By.ID, "passw").send_keys("admin")
driver.find_element(By.NAME, "btnSubmit").click()
driver.find_element(By.ID, "MenuHyperLink1").click()
driver.find_element(By.ID, "MenuHyperLink2").click()
driver.find_element(By.ID, "MenuHyperLink3").click()
driver.find_element(By.ID, "toAccount").click()
dropdown = driver.find_element(By.ID, "toAccount")
dropdown.find_element(By.XPATH, "//option[. = '800001 Checking']").click()
driver.find_element(By.ID, "transferAmount").click()
driver.find_element(By.ID, "transferAmount").send_keys("1")
driver.find_element(By.ID, "transfer").click()

time.sleep(30)
driver.execute_script("window.postMessage({'bptk_rattacker':'stop'});")

element = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, "bptk_rattacker_result")))
result = json.loads(element.get_attribute('innerText'))
#time.sleep(230)

assert result["scanResult"]["stats"]["vulnsCount"] > 0
print(result["scanResult"]["stats"]["vulnsCount"])
time.sleep(230)
driver.close()