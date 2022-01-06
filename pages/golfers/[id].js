import useGolfers from '../../lib/useGolfers'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'

export default function Golfer() {
  const router = useRouter()
  const { id } = router.query
  const { golferData, error } = useGolfers(id)
  let scores = null
  let golfer_name = null
  if (golferData) {
    scores = golferData.scores
    golfer_name = golferData.name
  }
  return (
    <div>
      <Layout>
        <h1>{golfer_name}</h1>
        <>
          {error ? (
            error
          ) : (
            <>
              {scores && scores.map(score => (
                <ScoreCard
                  key={score.id}
                  id={score.id}
                  totalScore={score.total_score}
                  playedAt={score.played_at}
                  userId={score.user_id}
                  userName={golfer_name}
                />
              ))}
            </>
          )}
        </>
      </Layout>
    </div>
  )
}

