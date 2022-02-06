import parse, {domToReact} from 'html-react-parser';

const Info = () => {

    const options = {
        replace: ({ name, children }) => {

          if (name === 'h3') {
            return <h3 className='text-xl font-medium pb-4'>{domToReact(children)}</h3>;
          }
      
          if (name === 'p') {
            return (
              <p className='text-lg font-light pb-4 text-justify'>
                {domToReact(children)}
              </p>
            );
          }
        }
      };


  const description = parse('<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p><h3>Why does bitcoin have value?</h3><p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p><h3>No inflation in bitcoin</h3><p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p><p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p><h3>Who built Bitcoin</h3><p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p><h3>The technology of Bitcoin</h3><p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p><h3>How to buy bitcoin?</h3><p>Continue reading <a href="https://coinranking.com/blog/how-to-buy-your-first-bitcoin/" rel="nofollow noopener" target="_blank">this blog article</a> on how to buy your first bitcoin.</p>',options)

  return (
    <div className="p-6">
      <p className="text-blue-600 font-semibold text-2xl pb-4">
        Bitcoin value statistics
      </p>
     {description}
    </div>
  );
};

export default Info;
